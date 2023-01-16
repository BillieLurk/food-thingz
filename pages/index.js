import Head from "next/head";
import styled from "styled-components";

import App from "../components/App";

const Main = styled.main`
  background-color: #1e1e1e;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

import { PrismaClient } from "@prisma/client";
//make a getServerSideProps function to fetch data from prisma

export async function getServerSideProps() {
  const prisma = new PrismaClient();
  const foodPlace = await prisma.foodPlace.findMany();
  
  return {
    props: {
      foodPlace,
    },
  };
}



export default function Home({foodPlace}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Kurppa food" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <App foodPlaces={foodPlace}/>
      </Main>
    </>
  );
}
