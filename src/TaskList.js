import React from 'react'
import ListItem from './ListItem'

export default React.createClass({
	getDefaultProps() {
		return {
			items: []
		}
	},
	render() {
		return (
			<ul>
				{this.props.items.map(item=>(
					<ListItem destroyItem={this.props.destroyItem} {...item} />
				))}
			</ul>
		)
	}
})