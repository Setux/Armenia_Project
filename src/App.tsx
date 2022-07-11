import React, {useEffect} from 'react';
import './App.scss';
import cookies from 'react-cookies'
import {Layout, List} from "antd";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "./utils/store";
import Loader from "./components/Loader";
import {fetchProjects} from "./utils/projectSlice";
import {Project} from "./utils/types";
import Card from "./components/Card";
import {fetchTags} from "./utils/tagsSlice";
import ProjectModal from "./components/ProjectModal";

const {Header, Content, Sider, Footer} = Layout

const App = () => {
    const token = cookies.load('havesToken')

    const dispatch = useAppDispatch()
    const isLoading = useSelector((state: RootState) => state.projects.isLoading)
    const data = useSelector((state: RootState) => state.projects.data as Project[])
    const isLoadingProject = useSelector((state: RootState) => state.projectModal.isLoading)

    useEffect(() => {
        dispatch(fetchTags())
        dispatch(fetchProjects())
    }, [])

  return (
      <Layout>
          <Header className="app__header"><h1 className="app__title" >HavesBank</h1></Header>
        <Layout>
          <Content className="app__content">
              {isLoading ?
                  <Loader /> :
                  <main className="app__main">
                    <List grid={{gutter: 16, column: 5}} dataSource={data}
                          renderItem={item => <List.Item><Card data={item} /></List.Item>} />
                  </main>}
              <ProjectModal />
          </Content>
            {token ? <Sider>Sider</Sider> : null}
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
  );
}

export default App;
