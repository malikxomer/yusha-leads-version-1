"use client"
import { useState, useEffect, useCallback } from "react";
import { TestimonialStyle } from "./Testimonial.style";
import { Tabs } from "antd";
import { QuotesIcon } from "../../svg/index";
import { testimonialsData } from "../../json/testimonial";

function TabContent(props) {
  const { comments, author } = props;
  return (
    <>
      <QuotesIcon />
      <h3 className="testimonial-description">{comments}</h3>
      <h5 className="testimonial-author">{author}</h5>
    </>
  );
}

const TabSlider = ({ itemList = [], tabPosition = "bottom", TabComponent }) => {
  const { TabPane } = Tabs;
  const [activeKey, setActiveKey] = useState(0);
  const [tabHover, setTabHover] = useState(false);

  useEffect(() => {
    const autoTabInterval = setInterval(() => {
      if (!tabHover) {
        const updatedKey = activeKey < itemList.length - 1 ? activeKey + 1 : 0;
        setActiveKey(updatedKey);
      }
    }, 5000);
    return () => {
      clearInterval(autoTabInterval);
    };
  }, [activeKey, setActiveKey, itemList, tabHover]);

  const onTabChange = useCallback(
    (key) => {
      setActiveKey(parseInt(key));
    },
    [setActiveKey]
  );

  const onMouseEnter = () => {
    setTabHover(true);
  };

  const onMouseLeave = () => {
    setTabHover(false);
  };

  return (
    <Tabs
      className="testimonial-tabs-wrapper"
      activeKey={`${activeKey}`}
      tabPosition={tabPosition}
      onChange={onTabChange}
    >
      {itemList.map((data, index) => (
        <TabPane
          tab={
            <figure key={data.id} className="tab-logo">
              <img src={data.logo} />
            </figure>
          }
          key={index}
          forceRender
        >
          <article
            className="tab-content-wrapper"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <TabComponent {...data} />
          </article>
        </TabPane>
      ))}
    </Tabs>
  );
};

export default function AnimatedTabs() {
  return (
    <TestimonialStyle>
      <span id="testimonials" />
      <TabSlider itemList={testimonialsData} TabComponent={TabContent} />
    </TestimonialStyle>
  );
}
