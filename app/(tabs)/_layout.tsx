import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { DocsButton } from "../../components/DocsButton";
type IconName = React.ComponentProps<typeof Ionicons>["name"];

const TABS: { name: string; title: string; icon: IconName }[] = [
  { name: "index", title: "Home", icon: "home" },
  { name: "todo-demo", title: "Todos", icon: "checkbox" },
  { name: "project", title: "Projects", icon: "briefcase" },
  { name: "signup", title: "User", icon: "person" },
];

function HeaderStar() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <Ionicons name="star" size={24} color="#61DAFB" />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerLeft: () => <HeaderStar />,
        headerRight: () => <DocsButton />,
      }}
    >
      {TABS.map(({ name, title, icon }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            title,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={icon} color={color} size={size} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
