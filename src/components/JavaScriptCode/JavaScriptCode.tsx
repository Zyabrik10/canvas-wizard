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
} from "../../components/ColoredCodeComponents/js/js";
import { Br } from "../ColoredCodeComponents/html/html";

type VarType = {
  name: string;
  children: JSX.Element | string | string[] | JSX.Element[];
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
  name: string;
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
          if (index + 1 === propertys.length) return <Property value={name} />;
          return (
            <>
              <Property value={name} />
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
              if (index + 1 === args.length) return <VarName value={name} />;
              return (
                <>
                  <VarName value={name} />
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
  children: JSX.Element | string | Array<string> | Array<JSX.Element> | null;
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
  children:
    | JSX.Element
    | string
    | Array<string>
    | Array<JSX.Element>
    | Array<JSX.Element | string>
    | null;
};

export function FunctionDeclare({
  children,
  name,
  parameters,
}: DeclareFunctionType) {
  console.log(children);

  return (
    <>
      <Literal value="function" />
      <FunctionName value={name} />
      <BracketExpression brackets="()">
        {parameters !== undefined && parameters.length > 0
          ? parameters.map((name: string, index: number) => {
              if (index + 1 === parameters.length)
                return <VarName value={name} />;
              return (
                <>
                  <VarName value={name} />
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
  args?: Array<string>;
  name: string;
};

export function CallFunction({ args, name }: CallFunctionType) {
  return (
    <>
      <FunctionName value={name} />
      <BracketExpression brackets="()">
        {args !== undefined && args.length > 0
          ? args.map((name: string, index: number) => {
              if (index + 1 === args.length) return <VarName value={name} />;
              return (
                <>
                  <VarName value={name} />
                  <Coma />
                </>
              );
            })
          : null}
      </BracketExpression>
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
                    <VarName value={property} /><Colon value=":" />{value}
                    <Br />
                  </>
                );

              return (
                <>
                  {" "}
                  <VarName value={property} /><Colon value=":" />{value}
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
