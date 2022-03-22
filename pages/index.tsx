import React from 'react';
import type { GetServerSideProps, NextPage } from 'next';
import { ThemeProvider } from 'styled-components';
import theme from '../components/theme';
import Heatmap from '../components/organism/Heatmap';
import transactions from '../utils/transactions';

const Home: NextPage = () => (
  <ThemeProvider theme={theme}>
    <Heatmap transactions={transactions} />
  </ThemeProvider>
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getServerSideProps: GetServerSideProps = async (cxt) => ({
  props: {}, // will be passed to the page component as props
});

export default Home;
