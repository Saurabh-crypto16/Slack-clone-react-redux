import React from "react";
import styled from "styled-components";
import { db } from "../firebase";
import { useDispatch } from "react-redux";
import { enterRoom } from "../features/appSlice";

//whole Icon component is passed as prop
function SidebarOption({ Icon, title, addChannelOption, id }) {
  const dispatch = useDispatch();
  const addChannel = () => {
    //if addChannelOptio is passed as a prop then this will run
    const channelName = prompt("Enter channel name...");
    //if channel name is entered then we insert it into db
    if (channelName) {
      //adding channel to "rooms" collection
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };
  const selectChannel = () => {
    //if addChannelOption is not passed as a prop then this will run
    //whenever we click a SidebarOption it will push/dispatch its id into the redux
    if (id) {
      dispatch(
        enterRoom({
          roomId: id,
        })
      );
    }
  };
  return (
    <SidebarOptionContainer
      onClick={addChannelOption ? addChannel : selectChannel}
    >
      {/*If Icon is passed then only render the below part else just span the title*/}
      {Icon && <Icon sontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span> {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
    background-color: #340e36;
  }
  > h3 {
    font-weight: 500;
  }
  > h3 > span {
    padding: 15px;
  }
`;

const SidebarOptionChannel = styled.h3`
  padding: 10px 0;
  font-weight: 300;
`;
