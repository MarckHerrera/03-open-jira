import { List, Paper } from '@mui/material';
import React, { FC, useContext, useMemo } from 'react'
import { EntryStatus } from '../../interfaces';
import { EntriesContext } from '../../context/entries';
import { EntryCard } from './EntryCard';


interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({status}) => {

    const { entries } = useContext(EntriesContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status) , [entries])

    
  return (
    //Todo: aqui haremos drop
    <div >
        <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px', '&::-webkit-scrollbar': { display: 'none' }}}>

            {/* Todo: cambiara si esta en drag o no */}
            <List sx={{opacity: 1}}>
                {
                    entriesByStatus.map(entry => (
                        <EntryCard key={entry._id} entry={entry}/>
                    ))
                }
            </List>
        </Paper>
    </div>
  )
};
