import React      from 'react';
import isOutside  from '../../util/isOutside';

export default React.createClass({
	render() {
		const { user, currentId } = this.props;

		const currentIndex = user.list.findIndex(o => o.id == currentId);
		const msgTitle = currentIndex > -1 ? user.list[currentIndex].nickname : '大厅';

		let members = [];

		if(currentId == 'HALL'){
			[user.myself, ...user.list].forEach((o, i) =>{
				o.active && members.push(
					<div key={i} className='member'>
						<img className='head' src={o.head} />
						<p className='nickname'>{o.nickname}</p>
					</div>
				);
			}) 
		}else{
			let o = user.list[currentIndex];
			members = <div className='member'>
						<img className='head' src={o.head} />
						<p className='nickname'>{o.nickname}</p>
					</div>
		}

		return (
			<div className='message-title'>
				<div ref='menu' className='menu none'>
					<i className='icon-menu'></i>
				</div>
				<p ref='title' className='title'>
					{msgTitle}<i ref='icon' className='icon-angle-down'></i>
				</p>
				<div className='members' ref='members'>{members}</div>
			</div>
		);
	},

	componentDidMount() {
		let touchable = 'ontouchstart' in document.body;

		document.addEventListener(touchable ? 'touchstart' : 'click', e => {
			if(isOutside(e.pageX, e.pageY, this.refs.members.getBoundingClientRect())){
				this.refs.members.classList.remove('open');
			}
		}, false);

		this.refs.menu.addEventListener(touchable ? 'touchstart' : 'click', this.menuHandler)
		this.refs.title.addEventListener(touchable ? 'touchstart' : 'click', this.clickHandler)
	},

	clickHandler(e) {
		const mb = this.refs.members;

		if(/title|icon-angle/.test(e.target.className)){
			mb.classList.toggle('open');
			this.refs.icon.className = mb.classList.contains('open') ? 'icon-angle-up' : 'icon-angle-down';
		}
		e.stopPropagation();
	},

	menuHandler(e) {
		this.refs.menu.classList.toggle('show');
		document.querySelector('.left').classList.toggle('show');
	}
});