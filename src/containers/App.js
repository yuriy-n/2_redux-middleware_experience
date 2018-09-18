import React from "react";
import { connect } from "react-redux";
import User from "../components/User";
import Page from "../components/Page";
import "./App.css";
import { setYearAction, getPhotos } from "../actions/pageAction";

function App({
  user,
  photos,
  year,
  setYearAction,
  isFetching,
  isFetchingError
}) {
  return (
    <div className="App App__container">
      <Page
        photos={photos}
        year={year}
        setYear={setYearAction}
        isFetching={isFetching}
        isFetchingError={isFetchingError}
      />
      <User name={user.name} />
    </div>
  );
}

function mapStateToProps(store) {
  return {
    user: store.user,
    photos: store.page.photos,
    year: store.page.year,
    isFetching: store.page.isFetching,
    isFetchingError: store.page.isFetchingError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setYearAction: function(year) {
      dispatch(getPhotos(year));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
