import React from "react";

export default function Update({ product, onUpdate }) {
  return (
    <article>
      <h2>상품 수정</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const price = event.target.price.value;
          const description = event.target.description.value;
          const location = event.target.location.value;
          const imageFile = event.target.image.files[0];

          if (!title || !price || !description || !location) {
            return alert("아직 작성하지 않은 항목이 있어요!");
          }

          if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
              onUpdate(title, price, description, location, reader.result);
            };
            reader.readAsDataURL(imageFile);
          } else {
            onUpdate(title, price, description, location, null);
          }
        }}
      >
        <p>
          <input 
            type="text" 
            name="title" 
            placeholder="상품명" 
            defaultValue={product.title}
            required 
          />
        </p>
        <p>
          <input 
            type="text" 
            name="price" 
            placeholder="가격" 
            defaultValue={product.price}
            required 
          />
        </p>
        <p>
          <textarea 
            name="description" 
            placeholder="설명" 
            defaultValue={product.description}
            required
          ></textarea>
        </p>
        <p>
          <input
            type="text"
            name="location"
            placeholder="지역 (예: 서울 강남구)"
            defaultValue={product.location}
            required
          />
        </p>
        <p>
          <input 
            type="file" 
            name="image" 
            accept="image/*" 
          />
          <small>이미지를 선택하지 않으면 기존 이미지가 유지됩니다.</small>
        </p>
        <p>
          <input type="submit" value="수정하기" />
        </p>
      </form>
    </article>
  );
}