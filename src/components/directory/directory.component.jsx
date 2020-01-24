import React,{useContext} from 'react';
import {DirectoryContext} from '../../providers/directory/directory.providers';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.scss';

const Directory = () => {
  const {getSections}= useContext(DirectoryContext);
  return(
  <div className='directory-menu'>
    {getSections().map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps} />
    ))}
  </div>
);
    }


export default Directory;
