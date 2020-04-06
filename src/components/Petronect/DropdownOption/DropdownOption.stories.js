import React from 'react';
import DropdownOption from './DropdownOption'

export default {
    title: 'DropdownOption',
    components: DropdownOption,
};

export const SidebarOption = () => <DropdownOption />
export const SidebarSelectedOption = () => <DropdownOption background={'#116EA030'} isSelected={'600'}/>