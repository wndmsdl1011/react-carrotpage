import React from "react";

export default function Create({ onAdd }) {
  return (
    <article>
      <h2>상품 등록</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value;
          const price = event.target.price.value;
          const description = event.target.description.value;
          const location = event.target.location.value;
          const imageFile = event.target.image.files[0];

          if (!title || !price || !description || !location || !imageFile) {
            return alert("아직 작성하지 않은 항목이 있어요!");
          }

          const reader = new FileReader();
          reader.onload = () => {
            onAdd(title, price, description, location, reader.result);
          };
          reader.readAsDataURL(imageFile);
          event.target.reset();
        }}
      >
        <p>
          <input type="text" name="title" placeholder="상품명" required />
        </p>
        <p>
          <input type="text" name="price" placeholder="가격" required />
        </p>
        <p>
          <textarea name="description" placeholder="설명" required></textarea>
        </p>
        <p>
          <input
            type="text"
            name="location"
            placeholder="지역 (예: 서울 강남구)"
            required
          />
        </p>{" "}
        {/* 지역 추가 */}
        <p>
          <input type="file" name="image" accept="image/*" required />
        </p>
        <p>
          <input type="submit" value="등록하기" />
        </p>
      </form>
    </article>
  );
}
