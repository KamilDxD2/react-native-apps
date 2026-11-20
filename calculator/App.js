
import { StatusBar, StyleSheet, Text, View, ScrollView, Dimensions, useColorScheme, Switch } from 'react-native';
import { Children, useState, useEffect, use } from 'react';

import Btn from './comps/btn';

export default function App() {
  let buttons = [{ name: "(", type: "none" }, { name: ")", type: "none" }, { name: "C", type: "fun" }, { name: "CE", type: "fun" }, { name: "Sin", type: "fun" }, { name: "7", type: "btn" }, { name: "8", type: "btn" }, { name: "9", type: "btn" }, { name: "/", type: "btn" }, { name: "Cos", type: "fun" }, { name: "4", type: "btn" }, { name: "5", type: "btn" }, { name: "6", type: "btn" }, { name: "*", type: "btn" }, { name: "Tan", type: "fun" }, { name: "1", type: "btn" }, { name: "2", type: "btn" }, { name: "3", type: "btn" }, { name: "-", type: "btn" }, { name: "Pow", type: "fun" }, { name: ".", type: "btn" }, { name: "0", type: "btn" }, { name: "=", type: "fun" }, { name: "+", type: "btn" }, { name: "Sqrt", type: "fun" },]
  const [previev, setPreviev] = useState(0);
  const [final, setFinal] = useState(0);

  const calculateFontSize = (text) => {
    const baseFontSize = 40;
    const maxLength = 10;
    const minFontSize = 18;
    const fontSize = text.length > maxLength ? baseFontSize - (text.length - maxLength) * 2 : baseFontSize;
    return fontSize < minFontSize ? minFontSize : fontSize;
  };

  const calculateFontSize2 = (text) => {
    const baseFontSize = 80;
    const maxLength = 5;
    const minFontSize = 18;
    const fontSize = String(text).length > maxLength ? baseFontSize - (String(text).length - maxLength) * 4.4 : baseFontSize;
    return fontSize < minFontSize ? minFontSize : fontSize;
  };

  const Calc = (item) => {
    if (item == 'CE') {
      setPreviev(0);
      setFinal(0);
    }
    else if (item == 'C') {
      if (previev !== 0) {
        if (previev.length == 1) {
          setPreviev(0);
        }
        else {
          setPreviev(previev.slice(0, -1));
        }

      }
    }
    else if (item == '=') {
      if (!['+', '-', '*', '/', '.'].includes(String(previev).slice(-1))) {
        setFinal(eval(previev));
      }
    }
    else if (['Sin', 'Cos', 'Tan', 'Pow', 'Sqrt'].includes(item) && !['+', '-', '*', '/', '.'].includes(String(previev).slice(-1))) {
      let temp = item.toLowerCase();
      if (item == 'Pow') {
        setFinal(eval(`Math.pow(${previev}, 2)`));
      }
      else {
        setFinal(eval(`Math.${temp}(${previev})`));
      }
    }
    else {
      if (previev === 0) {
        if (item == '.') {
          setPreviev('0.');
        }
        else if (!['*', '/', '-', '+'].includes(item)) {
          setPreviev(item);
        }

      }
      else {
        let temp = String(previev) + item;
        let runtimeRegEx = /^(?!.*[+\-*/.]{2})(?!.*\.\d*\.)((0|[1-9]\d*)(\.\d+)?)([+\-*/](0|[1-9]\d*)(\.\d+)?)*([+\-*/.])?$/
        if (runtimeRegEx.test(temp)) {
          setPreviev(previev + item);
        }
      }

    }

  };

  const [orientation, setOrientation] = useState(true)
  const isPortrait = () => {
    let dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait)
  })

  useEffect(() => {
    setOrientation(isPortrait)
  }, [])

  const colorScheme = useColorScheme();
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const x = colorScheme === 'light' ? true : false
    setIsEnabled(x)
  }, [colorScheme])

  const changeSwitchValue = () => {
    setIsEnabled((previousState) => !previousState);
  }


  return (
    <View style={[styles.main, style(orientation).main]}>
      <StatusBar></StatusBar>
      <View style={styles.value}>
        <View style={[styles.tcheme, styles.Vitem, { backgroundColor: isEnabled ? '#eaeaea' : '#242426' }]}>
          <Switch onValueChange={changeSwitchValue} value={isEnabled}></Switch>
        </View>
        <View style={[styles.previev, styles.Vitem, { backgroundColor: isEnabled ? '#eaeaea' : '#242426' }]}>
          <Text style={[styles.previevtxt, { fontSize: calculateFontSize(previev) }, { color: isEnabled ? '#c1c1c1' : 'white' }]}>{previev}</Text>
        </View>
        <View style={[styles.final, styles.Vitem, { backgroundColor: isEnabled ? '#eaeaea' : '#242426' }]}>
          <Text style={[{ fontSize: calculateFontSize2(final) }, { color: isEnabled ? 'black' : 'white' }]}>{final}</Text>
        </View>
      </View>
      <View style={[styles.buttons, { backgroundColor: isEnabled ? '#eaeaea' : '#242426' }]}>
        {buttons.map((obj, i) => {
          return <Btn key={i} name={obj.name} type={obj.type} pressed={Calc} orientation={orientation} theme={isEnabled}></Btn>
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  '*': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
  },
  main: {
    flex: 1,
  },
  value: {
    flex: 3,
    backgroundColor: 'yellow',
    width: '100%',
    // borderWidth: 1, 
    // borderColor: 'black', 
  },
  Vitem: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#eaeaea',
    // borderWidth: 1, 
    // borderColor: 'black', 
  },
  tcheme: {
    flex: 1,
    paddingRight: "7%",
  },
  previev: {
    flex: 1,
    paddingRight: "7%",
  },
  previevtxt: {
    color: '#c1c1c1',
    fontSize: 40,
  },
  final: {
    flex: 2,
    paddingRight: "7%",
  },
  buttons: {
    flex: 5,
    backgroundColor: '#eaeaea',
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'space-evenly',
  },
});

const style = (x) => StyleSheet.create({
  main: {
    flexDirection: x ? "column" : "row-reverse",
  },

});
