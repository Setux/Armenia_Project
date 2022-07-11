import {Collapse, List, Modal, Progress} from "antd";
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../utils/store";
import {clearModal, handleModal} from "../../utils/projectModalSlice";
import logo from '../Card/logo.jpg'
import VirtualList from 'rc-virtual-list'
import {format} from 'date-fns'
import getSuffix from "../../utils/getSuffix";
import Tag from "../Tag";
import React from "react";
import {Contribution} from "../../utils/types";
import {CheckCircleFilled} from "@ant-design/icons";

const {Panel} = Collapse

const ProjectModal = () => {
    const isVisible = useSelector((state: RootState) => state.projectModal.isVisible)
    const data = useSelector((state: RootState) => state.projectModal.data)
    const contributions = useSelector((state: RootState) => state.projectModal.contributions) as Contribution[]
    const id = useSelector((state: RootState) => state.projectModal.selectedId)

    const dispatch = useAppDispatch()

    return data && contributions ? <Modal centered cancelText="Выйти" okText="Сделать депозит" title={data.title} visible={isVisible} onCancel={() => {
        dispatch(clearModal())
        dispatch(handleModal(null))
    }}>
        <div className="projectModal__content">
            <div className="projectModal__info">
                <span>{data.article}</span>
                <span>Дата создания: {format(new Date(data.createdAt),"dd.MM.yyyy")}</span>
                <span>Собрано: {getSuffix(data.collectedMoney)} из {getSuffix(data.requiredMoney)}</span>
                <span><Progress percent={Number((data.collectedMoney / data.requiredMoney * 100).toFixed(2))} /></span>
                <span>{data.tagList.map((tagData) => <Tag data={tagData}/>)}</span>
            </div>
            <img src={logo}/>
        </div>
        <Collapse style={{marginTop: 12}} collapsible="header" defaultActiveKey={['1']}>
            <Panel header="Список депозитов" key="1">
                <List>
                    <VirtualList data={contributions} height={100} itemKey="id">
                        {(item => <List.Item key={item.id}>
                            <List.Item.Meta title={item.account} description={`Депозит в размере ${getSuffix(item.amount)}`} />
                            <CheckCircleFilled style={{fontSize: 18}} />
                        </List.Item>)}
                    </VirtualList>
                </List>
            </Panel>
        </Collapse>
    </Modal> : null
}

export default ProjectModal