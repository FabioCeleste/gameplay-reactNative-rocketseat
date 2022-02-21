import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { styles } from "./styles";

import { ButtonAdd } from "../../components/ButtonAdd";
import { CategorySelect } from "../../components/CategorySelect";
import { ListHeader } from "../../components/ListHeader";
import { Profile } from "../../components/Profile";
import { Appointments, AppointmentsProps } from "../../components/Appointments";
import { ListDivider } from "../../components/ListDivider";
import { COLLECTION_APPOINTMENTS } from "../../config/database";

export function Home() {
  const [category, setCategory] = useState("");
  const navigation = useNavigation();

  const [appointments, setAppointments] = useState<AppointmentsProps[]>([]);

  async function loadAppointments() {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    const appointmentsStorage: AppointmentsProps[] = storage
      ? JSON.parse(storage)
      : [];

    if (category) {
      setAppointments(
        appointmentsStorage.filter((item) => item.category === category)
      );
    } else {
      setAppointments(appointmentsStorage);
    }
  }

  useFocusEffect(
    useCallback(() => {
      loadAppointments();
    }, [category])
  );

  function handleCategorySelect(categoryId: string) {
    categoryId === category ? setCategory("") : setCategory(categoryId);
  }

  function handleAppointmentDatails(guildSelected: AppointmentsProps) {
    navigation.navigate("AppointmentDetails", { guildSelected });
  }
  function handleAppointmentCreate() {
    navigation.navigate("AppointmentCreate");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />

        <ListHeader
          title="Partidas Agendadas"
          subtitle={`Total ${appointments.length}`}
        />

        <FlatList
          style={styles.matches}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <ListDivider />}
          contentContainerStyle={{ paddingBottom: 69 }}
          data={appointments}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Appointments
              onPress={() => handleAppointmentDatails(item)}
              data={item}
            />
          )}
        />
      </View>
    </View>
  );
}
