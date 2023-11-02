import {
  BracketExpression,
  CallFunction,
  ClassFunctionDeclare,
  ClassObjectExpression,
  ConstVariable,
  UseObject,
} from "code-components/js-code/js-code";

import {
  Coma,
  Comment,
  Equal,
  Sign,
  VarName,
  Number,
  Semicoln,
} from "code-components/colored-code-components/js/js";
import { Br } from "code-components/colored-code-components/html/html";
import { nanoid } from "nanoid";

export default function Contructor() {
  return (
    <ClassFunctionDeclare
      name="constructor"
      parameters={[
        <BracketExpression key={nanoid()} brackets="{}">
          <VarName value="coor" />
          <Coma />
          <VarName value="rad" />
          <Coma />
          <VarName value="vel" />
        </BracketExpression>,
      ]}
    >
      {"  "}
      <Comment value="make object || default value in case we don't pass argument" />
      <Br />
      {"  "}
      <Comment value="it will be undefined then" />
      <Br />
      {"  "}
      <Comment value="the right part will be pasted" />
      <Br />
      <Br />

      {"  "}
      <UseObject name="this" propertys={["rad"]} />
      <Equal />
      <VarName value="rad" />
      <Sign value="||" />
      <CallFunction
        name="randInt"
        args={[
          <Number key={nanoid()} value="1" />,
          <Number key={nanoid()} value="10" />,
        ]}
      />
      <Semicoln />
      <Br />
      <Br />
      {"  "}
      <UseObject name="this" propertys={["coor"]} />
      <Equal />
      <VarName value="coor" />
      <Sign value="||" />
      <ClassObjectExpression
        propertys={[
          {
            property: "x",
            value: (
              <CallFunction
                name="randInt"
                args={[
                  <UseObject key={nanoid()} name="this" propertys={["rad"]} />,
                  <>
                    <UseObject
                      key={nanoid()}
                      name="canvas"
                      propertys={["width"]}
                    />
                    <Sign value="-" />
                    <UseObject key={nanoid()} name="this" propertys={["rad"]} />
                  </>,
                ]}
              />
            ),
          },
          {
            property: "y",
            value: (
              <CallFunction
                name="randInt"
                args={[
                  <UseObject key={nanoid()} name="this" propertys={["rad"]} />,
                  <>
                    <UseObject
                      key={nanoid()}
                      name="canvas"
                      propertys={["height"]}
                    />
                    <Sign value="-" />
                    <UseObject key={nanoid()} name="this" propertys={["rad"]} />
                  </>,
                ]}
              />
            ),
          },
        ]}
      />
      <Semicoln />
      <Br />
      <Br />

      {"  "}
      <ConstVariable name="minSpeed">
        <Number value="1" />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="maxSpeed">
        <Number value="10" />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="speedCoof">
        <Number value="50" />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="speedDirection">
        <ClassObjectExpression
          propertys={[
            {
              property: "left",
              value: <Number value="-1" />,
            },
            {
              property: "right",
              value: <Number value="1" />,
            },
          ]}
        />
      </ConstVariable>
      <Br />
      <Br />
      {"  "}
      <ConstVariable name="speedX">
        <CallFunction
          name="randInt"
          args={[
            <VarName key={nanoid()} value="minSpeed" />,
            <VarName key={nanoid()} value="maxSpeed" />,
          ]}
        />
        <Sign value="/" />
        <VarName value="speedCoof" />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="speedXDirection">
        <CallFunction
          name="randNum"
          args={[
            <UseObject
              key={nanoid()}
              name="speedDirection"
              propertys={["left"]}
            />,
            <UseObject
              key={nanoid()}
              name="speedDirection"
              propertys={["right"]}
            />,
          ]}
        />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="speedY">
        <CallFunction
          name="randInt"
          args={[
            <VarName key={nanoid()} value="minSpeed" />,
            <VarName key={nanoid()} value="maxSpeed" />,
          ]}
        />
        <Sign value="/" />
        <VarName value="speedCoof" />
      </ConstVariable>
      <Br />
      {"  "}
      <ConstVariable name="speedYDirection">
        <CallFunction
          name="randNum"
          args={[
            <UseObject
              key={nanoid()}
              name="speedDirection"
              propertys={["left"]}
            />,
            <UseObject
              key={nanoid()}
              name="speedDirection"
              propertys={["right"]}
            />,
          ]}
        />
      </ConstVariable>
      <Br />
      <Br />
      {"  "}

      <ConstVariable name="velTem">
        <ClassObjectExpression
          propertys={[
            {
              property: "x",
              value: (
                <>
                  <VarName value="speedX" />
                  <Sign value="*" />
                  <VarName value="speedXDirection" />
                </>
              ),
            },
            {
              property: "y",
              value: (
                <>
                  <VarName value="speedY" />
                  <Sign value="*" />
                  <VarName value="speedYDirection" />
                </>
              ),
            },
          ]}
        />
      </ConstVariable>
      <Br />
      <Br />
      {"  "}
      <UseObject name="this" propertys={["vel"]} />
      <Equal />
      <VarName value="vel" />
      <Sign value="||" />
      <VarName value="velTem" />
      <Semicoln />
      {"  "}
    </ClassFunctionDeclare>
  );
}
