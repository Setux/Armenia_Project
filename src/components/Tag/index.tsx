import {Tag as DTag} from "antd";
import {TagType} from "../../utils/types";
import React from "react";
import GetTagColor from "../../utils/getTagColor";
import {useSelector} from "react-redux";
import {RootState} from "../../utils/store";

interface Props {
    data: number
}

const Tag: React.FC<Props> = ({data}) => {
    const tag = useSelector((state: RootState) => state.tags.data as TagType[]).filter((tagItem) => data === tagItem.id)[0]
    return tag ? <DTag color={GetTagColor(tag.type)}>{tag.label}</DTag> : null
}

export default Tag