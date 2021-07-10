import React, { memo, useRef, useState, Fragment } from "react";
import styled, { keyframes } from "styled-components";

const AddFile = memo(({ imageUpload, name, onFileChange }) => {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  const onButtonClick = () => {
    inputRef.current.click();
  };

  const onImageChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    const imgupload = await imageUpload.upload(e.target.files[0]);
    setLoading(false);
    onFileChange({
      name: imgupload.original_filename,
      url: imgupload.url,
    });
  };
  return (
    <Fragment>
      <Uploadbutton
        type="file"
        accept="image/*"
        name="file"
        ref={inputRef}
        onChange={onImageChange}
      />
      {!loading && (
        <Button onClick={onButtonClick}>{name || "눌러서 추가하기"}</Button>
      )}
      {loading && <LoadingBox></LoadingBox>}
    </Fragment>
  );
});
export default AddFile;

const Uploadbutton = styled.input`
  display: none;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin-top: 10px;
  border-radius: 4px;
  cursor: pointer;
`;

const LoadingSpin = keyframes`
0%{
  transform:rotate(0deg);
}
100%{
  transform: rotate(360deg);
}
`;

const LoadingBox = styled.div`
  width: 30px;
  height: 30px;
  margin: 15px 0 0 30px;
  border-radius: 50%;
  border: 1px solid gray;
  border-top: 1px solid ${(props) => props.theme.pointPink};
  animation: ${LoadingSpin} 2s infinite;
`;
