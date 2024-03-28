import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

import { useRouter, Stack, useGlobalSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import Data from "../../constants/data";
// import { useParams } from "@react-navigation/native"; // Import useParams from @react-navigation/native

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();
  console.log(router)
  const [idData, setIdData] = useState();
  const [refreshing, setRefreshing] = useState(false);
  const tabs = ["About", "Qualifications", "Responsibilities"];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [like,setLike]=useState(false)
  const displayTabContent = () => {
    switch (activeTab) {
      case "About":
return <JobAbout info={idData?.job_about}/>
        
      case "Qualifications":
        return (<Specifics title={'Qualifications'} points={idData?.job_highlights?.qualifications ?? ['N/A']}/>)
        
      case "Responsibilities":
        return (<Specifics title={'Responsibilities'} points={idData?.job_highlights?.responsibilities ?? ['N/A']}/>)
      default:
        <Text>No Data</Text>;
        break;
    }
  };
  const onRefresh = () => {};
  useEffect(() => {
    console.log(params.id)
    if (!Data) {
      let arr = [];
      setIdData(arr.push({ error: "No Data To Show.." }));
    } else {
      Data?.map((value, index) => {
        if (value?.job_id == params.id) {
          setIdData(value);
        }
      });
    }
  }, []);

  return (
    <SafeAreaView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          // headerBackVisible:false,
          // headerLeft:()=>{
          //     <ScreenHeaderBtn iconUrl={icons.left} dimension='60%' handlePress={()=>router.back()}></ScreenHeaderBtn>
          // }
          headerRight: () => {
            <ScreenHeaderBtn iconUrl={icons.share} dimension={"60%"} />;
          },
          headerTitle: "",
        }}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {false ? (
          <ActivityIndicator size={"large"} color={COLORS.primary} />
        ) : false ? (
          <Text>Something Went Wrong</Text>
        ) : (
          <View style={{ padding: SIZES.medium, paddingBottom: 100 }}>
            <Company
              companyLogo={
                "https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg"
              }
              companyName={idData?.job_title}
              jobTitle={idData?.job_title}
              location={idData?.job_country}
            />

            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            {displayTabContent()}
          </View>
        )}
      </ScrollView>
      <JobFooter url={'https://in.indeed.com/?vjk=b105ce50175016b3'} like={like} setLike={setLike}/>
    </SafeAreaView>
  );
};
export default JobDetails;
