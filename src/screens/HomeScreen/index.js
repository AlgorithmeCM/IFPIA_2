import {
  View,
  Text,
  Animated,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Linking,
  Share,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {useRef, useState, useEffect} from 'react';
import useInterval from '../../../hooks/useInterval';
import {carrousel} from '../../../data/carrousel';

const HomeScreen = () => {
  const animation = useRef(new Animated.Value(0));
  const [currentImage, setCurrentImage] = useState(0);
  useInterval(() => handleAnimation(), 4000);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "https://play.google.com/store/apps/details?id=cm.algorithme.ifpia\n\nTélécharge l'application IFPIA sur Play Store et découvre l'École-Entreprise Digitale de l'Excellence.",
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAnimation = () => {
    let newCurrentImage = currentImage + 1;

    if (newCurrentImage >= carrousel.length) {
      newCurrentImage = 0;
    }

    Animated.spring(animation.current, {
      toValue: -(Dimensions.get('screen').width * newCurrentImage),
      useNativeDriver: true,
    }).start();

    setCurrentImage(newCurrentImage);
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.carrousel,
          {
            transform: [{translateX: animation.current}],
          },
        ]}>
        {carrousel.map(image => (
          <Image key={image} source={{uri: image}} style={styles.image} />
        ))}
      </Animated.View>
      <View style={styles.carrouselIndicator}>
        {carrousel.map((image, index) => (
          <View
            key={`${image}_${index}`}
            style={[
              styles.indicator,
              index === currentImage ? styles.activeIndicator : undefined,
            ]}
          />
        ))}
      </View>
      <ScrollView>
        <View style={styles.links}>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('https://ifpia.xyz/brochure-ifpia.pdf')
            }>
            <Image
              style={styles.servicesImage}
              source={require('../../../assets/brochure.jpg')}
            />
            <Text style={styles.text}>Télécharger la brochure</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                'https://play.google.com/store/apps/developer?id=Pr+Ing.+Fotsing+K.+Dieudonn%C3%A9',
              )
            }>
            <Image
              style={styles.servicesImage}
              source={require('../../../assets/playstore.jpg')}
            />
            <Text style={styles.text}>Consulter le Play Store</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.links}>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://ifpia.xyz')}>
            <Image
              style={styles.servicesImage}
              source={require('../../../assets/siteweb.webp')}
            />
            <Text style={styles.text}>Consulter le site web</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Image
              style={styles.servicesImage}
              source={require('../../../assets/partage.jpg')}
            />
            <Text style={styles.text}>Partager l'application</Text>
            <Text style={styles.text}>Partager l'application</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
