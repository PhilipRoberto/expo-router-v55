import { usePathname } from "expo-router";
import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function TabsLayout() {
  const path = usePathname();
  // console.log("Current Path:", path);

  return (
    <NativeTabs hidden={path !== "/"}>
      <NativeTabs.Trigger name="(home)">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" drawable="home" />
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="(profile)">
        <NativeTabs.Trigger.Label>Profile</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="gearshape.fill" drawable="settings" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
