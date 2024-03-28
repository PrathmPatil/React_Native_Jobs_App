import { View, Text } from "react-native";

import styles from "./specifics.style";
import { COLORS } from "../../../constants";

const Specifics = ({ title, points }) => {
  console.log(points)
  let arr=[qualifications='qualifications qualifications qualifications qualifications']

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>

      <View style={styles.pointsContainer}>
        {points === 'N/A' ?<Text style={{color:COLORS?.tertiary}}>No Data</Text>
        :points.map((item, index) => (
          <View style={styles.pointWrapper} key={item + index}>
            <View style={styles.pointDot} />
            <Text style={styles.pointText}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Specifics;
