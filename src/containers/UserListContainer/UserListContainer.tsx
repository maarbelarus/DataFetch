import React, { useState, useEffect, useCallback } from "react";
import { List, ListItem, LoadingBar, Button, ListItemDetails } from "components/common";
import { getUserList } from "actions/UserList";
import { useDispatch, useSelector } from "react-redux";

export function UserListContainer() {
  const [isOnload, setIsOnload] = useState<boolean>(false);
  const userListState = useSelector(state => state.userList);
  const dispatch = useDispatch();

  const getData = useCallback(() => {
    setIsOnload(true);
    getUserList(dispatch).finally(() => {
      setIsOnload(false);
    });
  }, [dispatch]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="user-list-container">
      {isOnload ? (
        <LoadingBar isFullScreen />
      ) : (
        <div>
          <div className="title-container">
            <h2 className="title">List of users</h2>
            <Button onClick={getData}>Refresh data</Button>
          </div>
          <List>
            {userListState?.userList.length ? (
              userListState.userList.map(item => (
                <ListItem key={`user-${item.id}`}>
                  <div className="item-container-header">
                    {item.name}, {item.email}
                  </div>
                  <ListItemDetails className="item-details-container">
                    <div className="item-details-column">
                      <div>Company:</div>
                      <div>{item.company.name}</div>
                      <div>Description:</div>
                      <div>
                        {item.company.catchPhrase}, {item.company.bs}
                      </div>
                    </div>
                    <div className="item-details-column">
                      <div>Phone:</div>
                      <div>{item.phone}</div>
                      <div>Website:</div>
                      <div>{item.website}</div>
                      <div>Address:</div>
                      <div>
                        {item.address.zipcode} {item.address.city}, {item.address.street}, {item.address.suite}
                      </div>
                    </div>
                  </ListItemDetails>
                </ListItem>
              ))
            ) : (
              <div>No data found</div>
            )}
          </List>
        </div>
      )}
    </div>
  );
}
