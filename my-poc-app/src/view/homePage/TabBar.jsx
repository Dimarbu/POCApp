import React from 'react';
import { Tabs, TabPanels, TabPanel, TabList, Tab } from '@chakra-ui/react';
import Pagination from './Pagination';
import Favorites from './Favorites';

const TabBar = () => {

    return (
        <Tabs flexDirection='row-reverse' defaultIndex={0}>
            <TabPanels>
                <TabPanel>
                    <Pagination />
                </TabPanel>
                <TabPanel >
                    <Favorites />
                </TabPanel>
            </TabPanels>
            <TabList position='absolute'>
                <Tab _selected={{ color: 'white', bg: 'black' }}>Collection</Tab>
                <Tab _selected={{ color: 'white', bg: 'black' }}>Favorites</Tab>
            </TabList>
        </Tabs>
    )
}

export default TabBar;