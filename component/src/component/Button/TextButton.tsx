import styled from "@emotion/styled";

interface TextButtonProps {
  /** Button 내의 텍스트*/
  textStr: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
  /** 호버할 때 배경색 변경 되게 할건지 선택하는 플래그 */
  isHoverEnabled?: boolean;
}

const TextButton = ({
  textStr,
  isActive,
  isHoverEnabled = false,
}: TextButtonProps) => {
  return (
    <TextButtonWrapper
      className={isActive ? "active" : ""}
      isHoverEnabled={isHoverEnabled}
    >
      {textStr}
    </TextButtonWrapper>
  );
};
export default TextButton;

const TextButtonWrapper = styled.button<{ isHoverEnabled: boolean }>`
  display: flex;
  padding: 8px;
  border: 1px solid var(--brand--border--gray);
  background-color: var(--brand--white);
  border-radius: 8px;

  cursor: pointer;

  // isHoverEnabled가 true일 때만 hover 스타일 적용
  ${({ isHoverEnabled }) =>
    isHoverEnabled &&
    `
    :hover {
      background-color: var(--brand--secondary--color);
      color: var(--brand--white);
    }
  `}

  &.active {
    background-color: var(--brand--secondary--color);
    color: var(--brand--white);
  }
`;
