import React from 'react';
import { Tabs, TabPanels, TabPanel, TabList, Tab} from '@chakra-ui/react';
import Pagination from './Pagination';

const TabBar = () => {

    return (
        <Tabs defaultIndex={0}>
            <TabPanels>
                <TabPanel>
                    <Pagination />
                </TabPanel>
                <TabPanel>
                   <p>Pagina ficti</p>
                </TabPanel>
            </TabPanels>
            <TabList>
                <Tab>Implemented</Tab>
                <Tab>Dummy</Tab>
            </TabList>
        </Tabs>
    )
}

export default TabBar;