import React, { useEffect, useState, Fragment } from "react";

import { RosConnection } from "../components/ros-react/functions/RosConnection";
import { ImageViewer } from "../components/ros-react/functions/ImageViewer";
import { Subscriber } from "../components/ros-react/functions/Subscriber";
import { TopicListProvider } from "../components/ros-react/functions/TopicListProvider";
import { useMsg } from "../components/ros-react/functions/useMsg";
import { useTopicList } from "../components/ros-react/functions/useTopicList";
import { Publisher } from "../components/ros-react/functions/Publisher";
import { Param } from "../components/ros-react/functions/Param";
import { useParam } from "../components/ros-react/functions/useParam";
import { ParamListProvider } from "../components/ros-react/functions/ParamListProvider";
import { useParamList } from "../components/ros-react/functions/useParamList";
import { ServiceListProvider } from "../components/ros-react/functions/ServiceListProvider";
import { useServiceList } from "../components/ros-react/functions/useServiceList";
import { ServiceCaller } from "../components/ros-react/functions/ServiceCaller";
import { ServiceServer } from "../components/ros-react/functions/ServiceServer";

function App() {
  const [trigger, setTrigger] = useState(false);
  const [delParam, setDelParam] = useState(false);
  const [message, setMessage] = useState({ data: 0 });

  useEffect(() => {
    setTimeout(() => {
      setTrigger(!trigger);
    }, 3000);
  }, [trigger]);

  useEffect(() => {
    setTimeout(() => {
      setMessage({ data: 4 });
    }, 3000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDelParam(true);
    }, 10000);
  }, []);

  return (
    <div>
      {/* All ROS components are wrapped into a RosConnection */}
      <RosConnection url={"ws://127.0.0.1:9090"} autoConnect>
        <Subscriber topic="/number" messageType="std_msgs/Float32">
          <MsgView />
        </Subscriber>

        <Param
          name="/react/param"
          setValue={1}
          get={trigger}
          delete={delParam}
          deleteCallback={(resp) => {
            console.log(resp);
          }}
          setCallback={(resp) => {
            console.log(resp);
          }}
        >
          <ParamView />
        </Param>

        <Publisher
          autoRepeat
          topic="/react/pub/repeat"
          throttleRate={10.0}
          message={{ data: 2 }}
          messageType="std_msgs/Float32"
        />

        <Publisher
          topic="/react/pub/norepeat"
          throttleRate={10.0}
          message={message}
          messageType="std_msgs/Float32"
          latch={true}
        />

        <ServiceServer
          name="/react/service"
          serviceType="std_srvs/SetBool"
          callback={serviceServerCallback}
        />

        <ServiceCaller
          name="/setbool"
          serviceType="std_srvs/SetBool"
          request={{ data: true }}
          trigger={trigger}
          callback={(resp) => {
            console.log(resp);
          }}
          failedCallback={(error) => {
            console.log(error);
          }}
        />

        <TopicListProvider
          trigger={trigger}
          failedCallback={(e) => {
            console.log(e);
          }}
        >
          <TopicListView />
        </TopicListProvider>

        <ServiceListProvider
          trigger={trigger}
          failedCallback={(e) => {
            console.log(e);
          }}
        >
          <ServiceListView />
        </ServiceListProvider>

        <ParamListProvider
          trigger={trigger}
          failedCallback={(e) => {
            console.log(e);
          }}
        >
          <ParamListView />
        </ParamListProvider>
      </RosConnection>

      <ImageViewer topic="/camera" />
    </div>
  );
}

const serviceServerCallback = (request, response) => {
  if (request.data === true) {
    response.success = true;
    response.message = "Passed true value";
  } else {
    response.success = false;
    response.message = "Passed false value";
  }
};

const ParamView = () => {
  const param = useParam();
  return <p>{`${param}`}</p>;
};

const MsgView = () => {
  const msg = useMsg();
  return <p> {`${msg.distance}`} </p>;
};

const TopicListView = () => {
  const topicList = useTopicList();
  return (
    <Fragment>
      <p>{`${topicList.topics}`}</p>
      <p>{`${topicList.types}`}</p>
    </Fragment>
  );
};

const ServiceListView = () => {
  const list = useServiceList();
  return <p>{`${list}`}</p>;
};

const ParamListView = () => {
  const list = useParamList();
  return <p>{`${list}`}</p>;
};
