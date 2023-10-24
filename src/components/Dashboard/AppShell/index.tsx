// import { Card, Text } from "@mantine/core";
// import { AppShell } from "@mantine/core";
// import { CustomHeader } from "../../components";
// import { Outlet } from "react-router-dom";
// import Navbar from "../../components/Navbar";
// import { navLinks } from "./config";
// import { Notifications } from "@mantine/notifications";
// import { useDisplayNameFinder } from "../../lib/url/helper";
// import { useDisclosure } from "@mantine/hooks";

// export function AppShellContainer() {
//   const [opened, { toggle }] = useDisclosure();

//   return (
//     <AppShell
//       header={{ height: 60 }}
//       navbar={{ width: 240, breakpoint: "sm", collapsed: { mobile: !opened }, }}
//     >
//       <AppShell.Header>
//         <CustomHeader />
//       </AppShell.Header>

//       <AppShell.Navbar>
//         <Navbar />
//       </AppShell.Navbar>

//       <AppShell.Main>
//         {" "}
//         <Notifications />
//         <Card mt={"50px"}>
//           <Card.Section withBorder inheritPadding py="sm">
//             <Text size={"xl"} className="ont-semibold text-xl">
//               {useDisplayNameFinder(navLinks)}
//             </Text>
//           </Card.Section>
//           <Card.Section withBorder inheritPadding py="sm">
//             <Outlet />
//           </Card.Section>
//         </Card>
//       </AppShell.Main>
//     </AppShell>
//   );
// }
