// import React, { useEffect, useState } from "react";
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ActivityIndicator,
//   SafeAreaView,
//   RefreshControl,
//   ScrollView,
// } from "react-native";
// import styles from "../../components/home/nearby/nearbyjobs.style";
// import { COLORS,icons } from "../../constants";
// import { NearbyJobCard, ScreenHeaderBtn } from "../../components";
// import useFetch from "../../hook/useFetch";
// import Data from "../../constants/data";
// import { useRouter, Stack, useGlobalSearchParams } from "expo-router";

// const JobSearch = () => {
//   const router = useRouter();
//   const params = useGlobalSearchParams();
//   const [refreshing, setRefreshing] = useState(false);
//   const [filtereddata, setFilteredData] = useState();
//   // const { data, isLoading, error } = useFetch("search", {
//   //   query: "React Native developer",
//   //   num_pages: "1",
//   // });
//   const onRefresh = () => {};

//   useEffect(() => {
//     console.log(params.value);
//     let filteredData = Data?.filter((value) => {
//       // console.log(value);
//       return (
//         value?.job_country == params.value ||
//         value?.job_id == parseInt(params.value) ||
//         value?.job_title == params.value||
//         value?.job_publisher == params.value ||
//         value?.job_employment_type == params.value 
//       );
//     });
//     // console.log(filteredData);
//     setFilteredData(filteredData);
//   }, [params.value]);
//   console.log(filtereddata)

//   return (
//     <SafeAreaView>
//        <Stack.Screen
//         options={{
//           headerStyle: { backgroundColor: COLORS.lightWhite },
//           headerShadowVisible: false,
//           // headerBackVisible:false,
//           // headerLeft:()=>{
//           //     <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={()=>router.back()}></ScreenHeaderBtn>
//           // }
//           headerRight: () => {
//             <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />;
//           },
//           headerTitle: "",
//         }}
//       />
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//         }
//       >
//                 <View style={styles.cardsContainer}>
//           {false ? (
//             <ActivityIndicator size="large" color={COLORS.primary} />
//           ) : false ? (
//             <Text>Something went wrong</Text>
//           ) : (
//             <View style={styles.cardsContainer}>
//               {false ? (
//                 <ActivityIndicator size="large" color={COLORS.primary} />
//               ) : false ? (
//                 <Text>Something went wrong</Text>
//               ) : ( filtereddata?.length?
//                 filtereddata?.map((job) => (
//                   <NearbyJobCard
//                     job={job}
//                     key={`nearby-job-${job.job_id}`}
//                     handleNavigate={() =>
//                       router.push(`/job-details/${job.job_id}`)
//                     }
//                   />
//                   // console.log(/job-details/${job.job_id})

//                 )):<Text>No Data To Display</Text>
//               )}
//             </View>
//           )}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default JobSearch;
