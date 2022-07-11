import {Card as DCard} from "antd";
import {Project} from "../../utils/types";
import React from "react";
import ProjectLogo from './logo.jpg'
import {useSelector} from "react-redux";
import {RootState, useAppDispatch} from "../../utils/store";
import Tag from "../Tag";
import Slider from "../Slider";
import {fetchContributions, fetchProject, handleModal} from "../../utils/projectModalSlice";

const {Meta} = DCard

interface Props {
    data: Project
}

const Card: React.FC<Props> = ({data}) => {
    const isLoading = useSelector((state: RootState) => state.tags.isLoading)
    const dispatch = useAppDispatch()

    return <DCard style={{height: 'min-content'}} onClick={() => {
        dispatch(handleModal(data.id))
        dispatch(fetchProject(data.id))
        dispatch(fetchContributions(data.id))
    }} loading={isLoading} hoverable cover={<img src={ProjectLogo} />}>
        {data.tagList.map((tagData) => <Tag data={tagData}/>)}
        <Meta style={{marginTop: 12, height: 150}} title={data.title} description={data.preview} />
        <Slider value={data.collectedMoney} needed={data.requiredMoney} />
    </DCard>
}

export default Card