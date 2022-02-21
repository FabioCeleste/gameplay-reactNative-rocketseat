import { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { GuildProps } from "../../components/Appointments";
import { styles } from "./styles";

import { Guild } from "../../components/Guild";
import { ListDivider } from "../../components/ListDivider";
import { Loading } from "../../components/Loading";
import { api } from "../../services/api";

export type GuildsProps = RectButtonProps & {
  handleGuildSelect: (guild: GuildProps) => void;
};

export function Guilds({ handleGuildSelect }: GuildsProps) {
  const [guilds, setGuilds] = useState<GuildProps[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchGuilds() {
    const response = await api.get("/users/@me/guilds");
    setGuilds(response.data);
    setLoading(false);
  }

  useEffect(() => {
    fetchGuilds();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <FlatList
          data={guilds}
          ItemSeparatorComponent={() => <ListDivider />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 69, paddingTop: 24 }}
          style={styles.guilds}
          ListHeaderComponent={() => <ListDivider isCentered />}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Guild data={item} onPress={() => handleGuildSelect(item)} />
          )}
        />
      )}
    </View>
  );
}
