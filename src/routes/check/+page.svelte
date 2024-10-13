<script>
  export let data
  const trainTrips = data.trips
  let selectedTrip = {}; // ตัวแปรสำหรับเก็บข้อมูลเที่ยวที่เลือก
  function selectTrip(trip) {
    selectedTrip = trip;
    const query = new URLSearchParams({
      trip_class: trip.class,
      from_datetime: trip.from_datetime,
      price: trip.price,
      trip_id: trip.trip_id,
      start: trip.start,
      end: trip.end,
      start_id: trip.start_id,
      end_id: trip.end_id
    }).toString();

    // เปลี่ยนหน้าไปยัง check2 พร้อม query params
    window.location.href = `/check/check2?${query}`;
  }
  console.log(selectedTrip);
  </script>

<nav class="bg-[#EADBC8] shadow-xl border">
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-24">
    <div class="flex">
        <!-- Logo -->
        <div class="flex-shrink-0 flex items-center">
        <a href="/" class="text-2xl font-bold text-[#102C57]">OURTRAINS</a>
        </div>
    </div>
</nav>

<div class="min-h-screen bg-white sm:grid-cols-1">
  <!-- Header -->
  <h1 class="text-3xl font-bold mb-8 text-center text-[#102C57] underline py-8">
    ตรวจตั๋วโดยสาร
  </h1>
  <p class=" text-lg text-[#102C57] sm:ml-32">
    สวัสดี! คุณ Asadawut นี่คือเที่ยวโดยสารที่คุณต้องตรวจ
  </p>
  <!-- Main Content -->
  <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
    
    <!-- Left Column: List of Trips -->
    <div class="overflow-auto h-96">
      {#each trainTrips as trip}
        <div class="bg-gray-200 sm:my-2 sm:p-2 my-4 p-4 rounded-lg flex sm:flex-col items-start sm:items-left justify-between">
          <div>
            <p class="text-base font-semibold">{trip.from_datetime}</p>
            <p class="text-sm">{trip.trip_id} {trip.start} - {trip.end}</p>
          </div>
          <button on:click={() => selectTrip(trip)} class="bg-[#102C57] text-white px-4 py-1 rounded-md mt-2 whitespace-nowrap text-sm">
            ตรวจตั๋วโดยสาร
          </button>
        </div>
      {/each}
    </div>
    
    <!-- Right Column: Instructions -->
    <div class="col-span-1 bg-white p-4">
      <h2 class="text-xl font-bold text-[#102C57] mb-4">
        เลือกเที่ยวโดยสารที่คุณกำลังจะตรวจ
      </h2>
      <p class="text-lg text-[#102C57] mb-4">
        และสแกน QR code จากตั๋วผู้โดยสาร อย่าลืม! เช็คผู้โดยสารให้ถูกต้อง
      </p>
    </div>
  </div>
</div>
