import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home/Home';
import TrendingPhotos from './TrendingPhotos/TrendingPhotos';
import StyledPageContainer from '../styled/PageContainer/StyledPageContainer';
import TrendingVideos from './TrendingVideos/TrendingVideos';


const PageRouter = () => (
    <>
        <StyledPageContainer>
            <Switch>
                <Route
                    exact
                    path={'/'}
                >
                    <Home />
                </Route>
                <Route
                    exact
                    path={'/photos'}
                >
                    <TrendingPhotos />
                </Route>
                <Route
                    exact
                    path={'/videos'}
                >
                    <TrendingVideos />
                </Route>
            </Switch>
        </StyledPageContainer>
    </>
);

export default PageRouter;