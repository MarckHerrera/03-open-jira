import React, { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material';

import { EntriesContext } from '../../context/entries';
import { UIContext } from '../../context/ui';

import { EntryStatus } from '../../interfaces';
import { EntryCard } from './EntryCard';

import styles from './css/EntryList.module.css'

interface Props {
    status: EntryStatus;
}

export const EntryList: FC<Props> = ({ status }) => {

    const { entries, updateEntry } = useContext(EntriesContext)

    const {isDraggin, endDragging} = useContext(UIContext)

    const entriesByStatus = useMemo(() => entries.filter(entry => entry.status === status), [entries])


    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }

    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        const id = event.dataTransfer.getData('text')
        
        const entry = entries.find( e => e._id === id)!;
        entry.status = status
        updateEntry(entry)
        endDragging();
    }

    return (
        //Todo: aqui haremos drop
        <div
            onDrop={onDropEntry}
            onDragOver={allowDrop}
            className={isDraggin? styles.dragging : ''}
        >
            <Paper sx={{ height: 'calc(100vh - 180px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '1px 5px', '&::-webkit-scrollbar': { display: 'none' } }}>

                <List sx={{ opacity: isDraggin ? 0.2 : 1, transition:'all .3s'}}>
                    {
                        entriesByStatus.map(entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }
                </List>
            </Paper>
        </div>
    )
};
