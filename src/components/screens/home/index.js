import React, { PropTypes, Component } from 'react';
import {
	RefreshControl,
	ScrollView,
	Text,
	TouchableOpacity,
	View,
	Platform
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import ProgressBar from '../../global/ProgressBar';
import { iconsMap } from '../../../utils/AppIcons';
import Swiper from 'react-native-swiper';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from './actions';
import styles from './styles';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			isRefreshing: false
		};

		this._onRefresh = this._onRefresh.bind(this);
		this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent.bind(this));
	}

	componentWillMount() {
		this._retrievePosts();
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.posts) {
			this.setState({ isLoading: false });
		}
	}

	_retrievePosts(isRefreshed) {
		this.props.actions.retrievePosts();
		if (isRefreshed && this.setState({ isRefreshing: false }));
	}

	_onRefresh() {
		this.setState({ isRefreshing: true });
		this._retrievePosts('isRefreshed');
	}

	_onNavigatorEvent(event) {
		if (event.type === 'NavBarButtonPress') {
			if (event.id === 'search') {
				let rightButtons = [];
				if (Platform.OS === 'ios') {
					rightButtons = [
						{
							id: 'close',
							title: 'Close',
							icon: iconsMap['ios-close']
						}
					];
				}
				this.props.navigator.showModal({
					screen: 'movieapp.Search',
					title: 'Search',
					navigatorButtons: {
						rightButtons
					}
				});
			}
		}
	}

	render() {
		const { posts } = this.props;
		const iconPlay = <Icon name="md-play" size={21} color="#9F9F9F" style={{ paddingLeft: 3, width: 22 }} />;
		const iconTop = <Icon name="md-trending-up" size={21} color="#9F9F9F" style={{ width: 22 }} />;
		const iconUp = <Icon name="md-recording" size={21} color="#9F9F9F" style={{ width: 22 }} />;

		return (
			this.state.isLoading ? <View style={styles.progressBar}><ProgressBar /></View> :
			<ScrollView
				style={styles.container}
				refreshControl={
					<RefreshControl
						refreshing={this.state.isRefreshing}
						onRefresh={this._onRefresh}
						colors={['#EA0000']}
						tintColor="white"
						title="loading..."
						titleColor="white"
						progressBackgroundColor="white"
					/>
				}>
				<View>
					<View style={styles.listHeading}>
						<Text style={styles.listHeadingLeft}>Popular</Text>
						<TouchableOpacity>
							<Text
								style={styles.listHeadingRight}>
								See all
							</Text>
						</TouchableOpacity>
					</View>
					<ScrollView horizontal showsHorizontalScrollIndicator={false}>
							<View style={styles.cardGenre}>
								{
									posts.map(item => (
										<Text key={item.id} style={styles.browseListItemText}>--- {item.title}</Text>
									))
								}
							</View>
					</ScrollView>
				</View>
			</ScrollView>
		);
	}
}

Home.propTypes = {
	actions: PropTypes.object.isRequired,
	navigator: PropTypes.object,
	posts: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	console.log("aggg", state);
	return {
		posts: state.home.posts
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(actions, dispatch)
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);