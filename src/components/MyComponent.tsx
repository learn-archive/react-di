import React from 'react';
import { MyService } from '../services/MyService';

type MyComponentProps = {
  myService: MyService;
};

export const MyComponent: React.FC<MyComponentProps> = ({ myService }) => {
  const data = myService.getData();
  return <div>{data}</div>;
};
