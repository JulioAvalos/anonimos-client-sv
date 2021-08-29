import { useEffect, useState } from 'react';
import { map } from 'lodash';
import { AxiosResponse } from 'axios';
import { Grid, Typography, Paper, Avatar } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';

import { MdDashboard } from 'react-icons/md';

import { getChain } from '../api/blockchainService';
import { IBlockchain, IBlockchainResponse } from '../types/blockchain';
import Spinner from '../components/UI/Spinner';
import { useStyles } from '../utils/global-style';

const BlockChain: React.FC<RouteComponentProps> = () => {
  const classes = useStyles();
  const [blockchain, setBlockchain] = useState<IBlockchain[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getChain()
      .then(({ data }: AxiosResponse<IBlockchainResponse>) => {
        setBlockchain(data.chain);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const mostrarUltimosValoresDelHash = (value: string) => {
    const stringLength: number = value.length;
    if (stringLength > 4) {
      return value.substring(stringLength - 10, stringLength);
    } else {
      return value;
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Typography variant="h4" className={classes.title}>
          Blockchain
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        justifyContent="flex-start"
        alignItems="stretch"
        style={{ padding: '2em' }}
        spacing={4}
      >
        {loading ? (
          <Spinner />
        ) : (
          map(blockchain, (chain: IBlockchain, index: number) => (
            <Grid item xs={4} key={`chain-item-${index}`}>
              <Paper elevation={5} className={classes.blockDetail}>
                <Grid container>
                  <Grid item xs={8}>
                    <Typography variant="body1">
                      <b>Numero de bloque:</b> {chain.block_id}
                    </Typography>
                    <Typography variant="body1">
                      <b>Hash anterior:</b>{' '}
                      {mostrarUltimosValoresDelHash(chain.previous_hash)}
                    </Typography>
                    <Typography variant="body1">
                      <b>Fecha de creacion:</b>{' '}
                      {new Date(chain.created_at).toISOString().split('T')[0]}
                    </Typography>
                    <Typography variant="body1">
                      <b>Esfuerzo computacional:</b> {chain.proof}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} container justifyContent="center" alignItems="center">
                    <Avatar variant="rounded" className={classes.blockdata} src={chain.data}>
                      <MdDashboard size={45}/>
                    </Avatar>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default BlockChain;
