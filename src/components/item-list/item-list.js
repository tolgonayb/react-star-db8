import React from 'react';
import './item-list.css';

const ItemList = (props) => {
	const renderElements = (arr) => {
		const people = arr.map((item) => {
			return (
				<li
					onClick={() => {
						props.selectId(item.id)
					}}
					key={item.id} className='list-group-item'>
					{props.children(item)}
				</li>
			)
		})
		return people
	}

	const content = renderElements(props.data)
	return (
		<ul className="item-list list-group">
			{content}
		</ul>
	);
}

export default ItemList;