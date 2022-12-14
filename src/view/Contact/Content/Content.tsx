import React from 'react'
import styled from 'styled-components'

// COMPOENNTS
import RightSection from './RightSection';
import LeftSection from './LeftSection';

export default function Content() {
    return (
        <MainLayout>
            <LeftSection />
            <RightSection />
        </MainLayout>
    )
}

const MainLayout = styled.section`
    margin: 0 auto;
    margin-bottom: 1rem;
    width: 1170px;
    min-height: 200px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;