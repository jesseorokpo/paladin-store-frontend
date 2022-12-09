import { Box, Grid } from "@mantine/core";
import { AssetCard } from "@ui/organisms/locker-widgets/AssetCard";
import { MainLockerCard } from "@ui/organisms/locker-widgets/MainLockerCard";
import { Locker, OrderItem } from "../../../sdk/catalog";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

export const LockerAssets = ({ locker }: { locker: Locker }) => {
  let [docs, setDocs] = useState<OrderItem[]>([]);
  console.log(locker, "63925eee426fc3d73e5c6e51");
  //@ts-ignore
  const LOCKER_PATH = `locker/${locker._id}`;
  const shelfCollection = collection(getFirestore(), `${LOCKER_PATH}/shelf`);

  function load() {
    getDocs(shelfCollection)
      .then((response) => {
        //@ts-ignore
        setDocs(response.docs.map((e) => e.data()));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <Box>
      <Grid>
        {docs.map((element) => {
          console.log(element);
          return (
            <Grid.Col md={6}>
              <AssetCard item={element} />
            </Grid.Col>
          );
        })}
      </Grid>
    </Box>
  );
};
