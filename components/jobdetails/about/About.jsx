import { View, Text } from "react-native";

import styles from "./about.style";
import styles1 from "../specifics/specifics.style";

const About = ({ info }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headText}>About the job:</Text>

      <View style={styles.contentBox}>
        {/* <Text style={styles.contextText}>{info}</Text> */}
        {!info?.qualifications ? (
          <Text> No Data </Text>
        ) : (
          info?.qualifications?.map((value, index) => {
           return <Text style={styles.contextText}>{value}</Text>;
          })
        )}
        {!info?.responsibilities ? (
          <Text> No Data </Text>
        ) : (
          info?.responsibilities?.map((value, index) =>(<View style={styles1.pointWrapper} key={value + index}>
            <View style={styles1.pointDot} />
            <Text style={styles1.pointText}>{value}</Text>
          </View>) )
        )}
      </View>
    </View>
  );
};

export default About;
