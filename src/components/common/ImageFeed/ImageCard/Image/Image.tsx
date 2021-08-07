import React from 'react';

const Image = (props: Props) => {
  return (
    <div>
      <img src = {props.url} onLoad = {props.onLoad()} alt = {props.alt_description}/>
    </div>
  )
}
export default Image;

type Props = {
  url : string,
  onLoad: any,
  alt_description: string,
}
