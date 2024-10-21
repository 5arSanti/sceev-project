/* eslint-disable react/prop-types */
import React from "react";

import { handleDeleteData } from "../../../../utils/handleData/handleDeleteData";
import { AllInfoGridContainer } from "../../AllInfoContainer";
import { EditDeleteCard } from "../../EditDeleteCard";
import { SpanCard, TextCard } from "../../TextComponents";
import { WrapperContainer1, WrapperContainer2 } from "../../WrapperContainers";
import { AppContext } from "../../../../Context";
import { handleNotifications } from "../../../../utils/handleNotifications";
import { formatNumbers } from "../../../../utils/formatNumbers";

const UsersCard = ({item}) => {
    const context = React.useContext(AppContext)

    const handleEditUser = async (item) => {
        handleNotifications("info", `Editando al usuario ${item.name}`)
        context.setUsers(item);
    }
    const handleDeleteUser = async () => {
        context.setLoading(true);
        await handleDeleteData(item, "/users")
        context.setLoading(false);
    }

    return(
        <WrapperContainer1 padding={0}>
            <AllInfoGridContainer className="grid-175-025" gap={10}>
                <WrapperContainer2 flexDirection="column" justifyContent="center" padding={20}>
                    <TextCard><SpanCard>Cedula: </SpanCard> {formatNumbers(item?.id)}</TextCard>
                    <TextCard><SpanCard>Nombres: </SpanCard> {item?.names}</TextCard>
                    <TextCard><SpanCard>Apellidos: </SpanCard> {item?.surnames}</TextCard>
                    <TextCard><SpanCard>Correo: </SpanCard> {item?.email}</TextCard>
                    <TextCard><SpanCard>Tipo de usuario: </SpanCard> {item?.userType}</TextCard>
                </WrapperContainer2>

                <EditDeleteCard item={item} onDelete={handleDeleteUser} onEdit={() => handleEditUser(item)}/>
            </AllInfoGridContainer>
        </WrapperContainer1>
    );
}

export { UsersCard }