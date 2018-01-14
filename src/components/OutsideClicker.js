import React from 'react';

function withOutsideClicker (WrappedComponent) {
		return class extends React.Component {
				constructor(props) {
						super(props);
						this.state = {
								outside: false
						};
						this.setWrapperRef = this.setWrapperRef.bind(this);
						this.handleClickOutside = this.handleClickOutside.bind(this);
				}

				componentDidMount() {
						document.addEventListener('mousedown', this.handleClickOutside);
				}

				componentWillUnmount() {
						document.removeEventListener('mousedown', this.handleClickOutside);
				}

				setWrapperRef(node) {
						this.wrapperRef = node;
				}


				handleClickOutside(event) {
						if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
							this.setState({
									outside: true
							});
						} else {
								this.setState({
										outside: false
								});
						}
				}

				render() {
						return (
								<div ref={this.setWrapperRef}>
										<WrappedComponent outside={this.state.outside} {...this.props} />
								</div>
						);
				}
		}
}

export default withOutsideClicker;
