"use client";

import { Button } from "@/components/ui-components/Button";
import { Col, Row } from "@/components/ui-components/Grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useDarkMode } from "@/context/DarkMode";
import React, { useEffect } from "react";
import styled from "styled-components";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
}

const Componentss = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    console.log("Is dark mode", isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <Row>
        <Col>
          {" "}
          <div className="h-full justify-center items-center ">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is is accessible ??</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px" }}>
        <Col>
          <Button onClick={() => toggleDarkMode()}>
            {isDarkMode ? "Disable Mode" : "Enable Mode"}
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Componentss;
