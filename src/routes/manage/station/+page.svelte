<script>
    import { goto } from '$app/navigation';
    let stationCode = '';
    let stationName = '';
    let duration = '';

    // Programmatic navigation using SvelteKit's goto
    function navigateToManage() {
        goto('/manage');
    }
</script>

<div class = "bg-white min-h-screen">
    <nav class="bg-[#EADBC8] shadow-l border">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-24">
            <div class="flex">
              <!-- Logo -->
              <div class="flex-shrink-0 flex items-center">
                <a href="/" class="text-2xl font-bold text-[#102C57]">OURTRAINS</a>
              </div>
            </div>
    </nav>
    <div >
        <div class=" flex flex-col items-center justify-center mt-8" >
            <div class="bg-white  rounded  w-1/2">
                <h1 class="text-3xl font-bold mb-8 text-center text-[#102C57] underline">จัดการเที่ยวโดยสาร</h1>
                <h2 class="text-lg font-bold mb-4">เพิ่มสถานี</h2>
                <div class="grid sm:grid-cols-3 gap-4 mb-6">
                    <input type="text" class="border p-2 rounded" placeholder="รหัสสถานี" bind:value={stationCode}>
                    <input type="text" class="border p-2 rounded" placeholder="ชื่อสถานี" bind:value={stationName}>
                    <input type="text" class="border p-2 rounded" placeholder="ระยะเวลา" bind:value={duration}>
                </div>
                <div class="mt-4 flex items-center justify-center bg-white">
                    <button class="bg-[#102C57] text-white px-4 py-2 rounded-md" on:click={navigateToManage}>
                        ยืนยัน
                    </button>
                    <button class="bg-[#102C57] text-white px-4 py-2 rounded-md ml-4 whitespace-nowrap" on:click={navigateToManage}>
                        ย้อนกลับ
                    </button>
                </div>
                
            </div>
        </div>
    </div>
    
</div>
