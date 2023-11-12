import { JSX } from "react";

import {
  Dot,
  VarDec,
  VarName,
  Equal,
  Bracket,
  Method,
  Object,
  Semicoln,
  Coma,
  Property,
  Literal,
  FunctionName,
  Quote,
  Text,
  ArrowFunction,
  Colon,
  ClassName,
  Number,
  Sign,
} from "../colored-code-components/js/js";
import { Br } from "../colored-code-components/html/html";
import { nanoid } from "nanoid";

type VarType = {
  name: string;
  children: any;
};

export function ConstVariable({ name, children }: VarType) {
  return (
    <>
      <VarDec value="const" />
      <VarName value={name} />
      <Equal />
      {children}
      <Semicoln />
    </>
  );
}

export function LetVariable({ name, children }: VarType) {
  return (
    <>
      <VarDec value="let" />
      <VarName value={name} />
      <Equal />
      {children}
      <Semicoln />
    </>
  );
}

export function String({ text, quote }: { text: string; quote: string }) {
  return (
    <>
      <Quote value={quote} />
      <Text value={text} />
      <Quote value={quote} />
    </>
  );
}

type BracketExpressionType = {
  children?:
    | JSX.Element
    | string
    | Array<string>
    | Array<JSX.Element>
    | Array<string | JSX.Element>
    | null;
  brackets: string | "()";
};

export function BracketExpression({
  children,
  brackets,
}: BracketExpressionType) {
  return (
    <>
      <Bracket value={brackets[0]} />
      {children}
      <Bracket value={brackets[1]} />
    </>
  );
}

type UseObjectType = {
  name: string | null;
  propertys?: Array<string>;
  children?: JSX.Element | string | Array<string> | Array<JSX.Element> | null;
  method?: string;
};

export function UseObject({
  name,
  propertys,
  method,
  children,
}: UseObjectType) {
  return (
    <>
      <Object value={name} />
      <Dot />
      {propertys !== undefined &&
        propertys.map((name, index) => {
          if (index + 1 === propertys.length)
            return <Property key={nanoid()} value={name} />;
          return (
            <>
              <Property key={nanoid()} value={name} />
              <Dot />
            </>
          );
        })}
      {method !== undefined ? (
        <>
          <Method value={method} />
          <BracketExpression brackets="()">{children}</BracketExpression>
        </>
      ) : null}
    </>
  );
}

type ArrowFunctionType = {
  name: string;
  args?: Array<string>;
  children?: JSX.Element | string | Array<string> | Array<JSX.Element> | null;
};

export function UseArrowFunction({ name, children, args }: ArrowFunctionType) {
  return (
    <>
      <VarDec value="const" />
      <VarName value={name} />
      <Equal />
      <BracketExpression brackets="()">
        {args !== undefined && args.length !== 0
          ? args.map((name, index) => {
              if (index + 1 === args.length)
                return <VarName key={nanoid()} value={name} />;
              return (
                <>
                  <VarName key={nanoid()} value={name} />
                  <Coma />
                </>
              );
            })
          : null}
      </BracketExpression>
      <ArrowFunction />
      {children}
      <Semicoln />
    </>
  );
}

type ConsoleLogType = {
  children: any;
};

export function ConsoleLog({ children }: ConsoleLogType) {
  return (
    <>
      <UseObject name="console" method="log">
        {children}
      </UseObject>
      <Semicoln />
    </>
  );
}

type DeclareFunctionType = {
  parameters?: Array<string>;
  name: string;
  children:any;
};

export function FunctionDeclare({
  children,
  name,
  parameters,
}: DeclareFunctionType) {
  return (
    <>
      <Literal value="function" />
      <FunctionName value={name} />
      <BracketExpression brackets="()">
        {parameters !== undefined && parameters.length > 0
          ? parameters.map((name: string, index: number) => {
              if (index + 1 === parameters.length)
                return <VarName key={nanoid()} value={name} />;
              return (
                <>
                  <VarName key={nanoid()} value={name} />
                  <Coma />
                </>
              );
            })
          : null}
      </BracketExpression>
      <Bracket value="{" />
      <Br />
      {children}
      <Br />
      <Bracket value="}" />
    </>
  );
}

type ReturnType = {
  children?: JSX.Element | string | null;
};

export function Return({ children }: ReturnType) {
  return (
    <>
      <Literal value="return" />
      {children}
      <Semicoln />
    </>
  );
}

type CallFunctionType = {
  args?: Array<string> | Array<JSX.Element> | Array<JSX.Element | string>;
  name: string;
};

export function CallFunction({ args, name }: CallFunctionType) {
  return (
    <>
      <FunctionName value={name} />
      <BracketExpression brackets="()">
        {args !== undefined && args.length > 0
          ? args.map((name: string | JSX.Element, index: number) => {
              if (index + 1 === args.length)
                return <VarName key={nanoid()} value={name} />;
              return (
                <>
                  <VarName key={nanoid()} value={name} />
                  <Coma />
                </>
              );
            })
          : null}
      </BracketExpression>
    </>
  );
}

type CallFunctionWithChildrenType = {
  name: string;
  children:any;
};

export function CallFunctionWithChildren({
  children,
  name,
}: CallFunctionWithChildrenType) {
  return (
    <>
      <FunctionName value={name} />
      <BracketExpression brackets="()">{children}</BracketExpression>
    </>
  );
}

type DeclareClassType = {
  children?:
    | JSX.Element
    | string
    | Array<string>
    | Array<JSX.Element>
    | Array<JSX.Element | string>
    | null;
  name: string;
};

export function DeclareClass({ children, name }: DeclareClassType) {
  console.log(children);

  return (
    <>
      <Literal value="class" />
      <ClassName value={name} />
      <Bracket value="{" />
      <Br />
      {children}
      <Br />
      <Bracket value="}" />
    </>
  );
}

type ClassFunctionDeclareType = {
  parameters?: Array<string> | Array<JSX.Element> | Array<JSX.Element | string>;
  name: string;
  children: any;
};

export function ClassFunctionDeclare({
  children,
  name,
  parameters,
}: ClassFunctionDeclareType) {
  return (
    <>
      {" "}
      <FunctionName value={name} />{" "}
      <BracketExpression brackets="()">
        {parameters !== undefined && parameters.length > 0
          ? parameters.map((e, index: number) => {
              if (index + 1 === parameters.length) return e;
              return (
                <>
                  {e}
                  <Coma />
                </>
              );
            })
          : null}
      </BracketExpression>
      <Bracket value="{" />
      <Br />
      {children}
      <Br /> <Bracket value="}" />
    </>
  );
}

type ObjectExpressionPropertysType = { property: string; value: any };

type ObjectExpressionType = {
  propertys: Array<ObjectExpressionPropertysType>;
};

export function ObjectExpression({ propertys }: ObjectExpressionType) {
  return (
    <>
      <Bracket value="{" />
      <Br />
      {propertys !== undefined && propertys.length > 0
        ? propertys.map(
            (
              { property, value }: ObjectExpressionPropertysType,
              index: number
            ) => {
              if (index + 1 === propertys.length)
                return (
                  <>
                    {" "}
                    <VarName key={nanoid()} value={property} />
                    <Colon />
                    {value}
                    <Br />
                  </>
                );

              return (
                <>
                  {" "}
                  <VarName key={nanoid()} value={property} />
                  <Colon />
                  {value}
                  <Coma />
                  <Br />
                </>
              );
            }
          )
        : null}
      <Bracket value="}" />
    </>
  );
}

export function ClassObjectExpression({ propertys }: ObjectExpressionType) {
  return (
    <>
      <Bracket value="{" />
      <Br />
      {propertys !== undefined && propertys.length > 0
        ? propertys.map(
            (
              { property, value }: ObjectExpressionPropertysType,
              index: number
            ) => {
              if (index + 1 === propertys.length)
                return (
                  <>
                    {"    "}

                    <VarName key={nanoid()} value={property} />
                    <Colon />
                    {" "}
                    {value}
                    <Br />
                  </>
                );

              return (
                <>
                  {"    "}
                  <VarName key={nanoid()} value={property} />
                  <Colon />
                    {" "}

                  {value}
                  <Coma />
                  <Br />
                </>
              );
            }
          )
        : null}
      {"  "}
      <Bracket value="}" />
    </>
  );
}

type InitClassInstanceType = {
  name: string;
  children: any;
};

export function InitClassInstance({ name, children }: InitClassInstanceType) {
  return (
    <>
      <Literal value="new" />
      <Literal value={name} />
      <BracketExpression brackets="()">{children}</BracketExpression>
    </>
  );
}

type ForType = {
  children: any;
  variable: {
    name: string;
    value: JSX.Element | string;
  };
  compare: {
    sign: "<" | ">" | ">=" | "<=";
    value: string;
  };
  iteration: {
    oprator: "+=" | "++";
    value: string | JSX.Element;
  };
};

export function DecalreFor({
  children,
  variable,
  compare,
  iteration,
}: ForType) {
  return (
    <>
      <Literal value="for" />
      <BracketExpression brackets="()">
        <LetVariable name={variable.name}>
          <Number value={variable.value} />
        </LetVariable>
        <VarName value={variable.name} />
        <Sign value={compare.sign} />
        <VarName value={compare.value} />
        <Semicoln />
        <VarName value={variable.name} />
        {iteration.oprator}
        <Number value={iteration.value} />
      </BracketExpression>
      <BracketExpression brackets="{}">{children}</BracketExpression>
    </>
  );
}
