import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherForm from '../pages/TeacherForm';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/TeacherList" component={TeacherList} />
      <Route path="/TeacherForm" component={TeacherForm} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
