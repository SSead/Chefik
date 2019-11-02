import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  BackroundImage
  
} from 'react-native';
import Card from './Recent/Card';




class Recent extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      showRecipe: false,
      card: null
    }
  }

  dummyData = [
    {
      img: 'https://www.nkp.ba/wp-content/uploads/2012/12/bosanski-lonac.jpeg',
      title: 'Bosanski lonac',
      dishType: 'Kuhanje',
      description: 'Servings: 4\nTime to prepare: 45min',
      icon2: require('../assets/icon2.png')
    },
    {
      img: 'http://www.velikakuhinja.com/img/s/482x280/recepti/f6b08770b2f590232f4f90a86dddc35e.jpg',
      title: 'Sogan dolma',
      dishType: 'Glavno',
      description: 'Servings: 5\nTime to prepare: 55min',
      icon1: require('../assets/icon1.png'),
      icon2: require('../assets/icon2.png')
    },
    {
      img: 'https://kuharica.kontin.info/wp-content/uploads/2015/01/svecana-pita-s-mesom-darkova-web-kuharica-13.jpg',
      title: 'Svecana pita s mesom',
      dishType: 'Pita',
      description: 'Servings: 6\nTime to prepare: 30min',
      icon2: require('../assets/icon2.png')
    },
    {
      img: 'https://static.klix.ba/media/images/vijesti/141003055.jpg',
      title: 'Baklava',
      dishType: 'Dessert',
      description: 'Servings: 10\nTime to prepare: 50min',
      icon1: require('../assets/icon1.png'),
      icon2: require('../assets/icon2.png')
    },
  ]

  openCard = (card) => {
    return(
      <View style={{backgroundColor: '#ff7878', width: '100%', height: '100%'}}>

      </View>
    )
  }

  render() {
    if(this.state.showRecipe){
      return(
        <View style={{backgroundColor: 'white', width: '100%', height: '100%',flexDirection: 'row'}}>
        <TouchableOpacity style={{top: 20,zIndex: 1000 }} onPress={()=>{this.setState({showRecipe: false})}}>
          <Image style={{ marginLeft:20}}source={require('../assets/left-arrow.png')}/>
        </TouchableOpacity>
          <Image style={{right: 43,width: '100%', height: '30%', overlayColor: '#ff7878', }} source={{uri: this.state.card.img}}/>
        </View>
      )
    }else{
      return(
        <View style={styles.container}>
  
          <View style={styles.bar}>
              <TouchableOpacity style={{marginTop: 20}}>
                <Image style={{width:22, height: 22}} source={require('../assets/search.png')}/>
              </TouchableOpacity>
  
              <TouchableOpacity style={{marginTop: 20, marginLeft: 20}}>
                <Image style={{width:22, height: 22}} source={require('../assets/staring.png')}/>
              </TouchableOpacity>
  
          </View>
  
          <View style={styles.titleView}>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              What are you
              </Text>
              <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              cooking today?
              </Text>
              <Text style={{fontSize: 20, color: '#6C6C6C'}}>
                Need inspiration
              </Text>
          </View>
  
  
          <ScrollView style={{marginTop: 50}} horizontal={true}>
            {
              this.dummyData.map(card => {
                return (
                  <TouchableOpacity onPress={()=> this.setState({showRecipe: true, card: card})}>
                    <Card img = {card.img} title={card.title} description={card.description} dishType={card.dishType} icon1={card.icon1} icon2={card.icon2}/>
                  </TouchableOpacity>
                  )
              })
            }
          </ScrollView>
          
        </View>
      )
    }
    }
    

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#EFEFEF'
  },
  bar:{
    paddingLeft: '80%',
    height: 43,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignItems: 'flex-end'
  },

  titleView:{
    marginTop: 56,
    marginLeft: 19,

  }
  
});

export default Recent;