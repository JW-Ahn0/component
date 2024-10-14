import styled from "@emotion/styled";
import { useState } from "react";

interface IconButtonProps {
  /** icon 이미지 경로 */
  iconPath: string;
  /** 선택시 하이라이트 주는 플래그 */
  isActive?: boolean;
}

const IconButton = ({ iconPath, isActive }: IconButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const activePath = iconPath.replace("_default", "_active");
  const imagePath = isHovered || isActive ? activePath : iconPath;
  return (
    <IconButtonWrapper
      className={isActive ? "active" : ""}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={imagePath} alt="아이콘_버튼_이미지" />
    </IconButtonWrapper>
  );
};
export default IconButton;

const IconButtonWrapper = styled.button`
  width: 20px;
  height: 20px;
  display: flex;

  justify-content: center;
  align-items: center;
  padding: 4px;
  background-color: var(--brand--white);
  border-radius: 8px;
  border: none;
  cursor: pointer;

  :hover {
    background-color: var(--brand--secondary--color);
  }

  &.active {
    background-color: var(--brand--secondary--color);
  }
`;
