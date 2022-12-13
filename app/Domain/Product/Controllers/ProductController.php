<?php

namespace App\Domain\Product\Controllers;

use App\Http\Controllers\Controller;
use App\Domain\Product\BLL\Product\ProductBLLInterface;
use App\Domain\Product\Models\Product;
use App\Domain\Product\Requests\ProductRequest;
use Yajra\DataTables\Facades\DataTables;

/**
 * @property ProductBLLInterface productBLL
 */
class ProductController extends Controller
{
    public function __construct(ProductBLLInterface $productBLL)
    {
        $this->productBLL = $productBLL;
    }

    /**
     * Display a listing of the resource.
     *
     */
    public function index()
    {
        return inertia('Product/Index', []);
    }

    public function get()
    {
       $products = $this->productBLL->getProducts();

       return DataTables::eloquent($products)
           ->make(true);
    }

    /**
     * Show the form for creating a new resource.
     *
     */
    public function create()
    {
        return inertia('Product/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProductRequest $request
     */
    public function store(ProductRequest $request)
    {
        $data = $request->all();
        $this->productBLL->create($data);

        session()->flash('success', 'Product was created successfully');
        return redirect()->route('product.index');
    }

    /**
     * Display the specified resource.
     *
     * @param Product $product
     */
    public function show(Product $product)
    {
        return inertia('Product/Show', [
            'product' => $product
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  Product  $product
     */
    public function edit(Product $product)
    {
        return inertia('Product/Edit', [
            'product' => $product
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ProductRequest $request
     * @param  Product  $product
     */
    public function update(ProductRequest $request, Product $product)
    {
       $data = $request->all();
       $this->productBLL->update($product, $data);

        session()->flash('success', 'Product was updated successfully');
        return redirect()->route('product.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Product $product
     */
    public function destroy(Product $product)
    {
        $this->productBLL->delete($product);

        return response()->json(['message' => 'Product was successfully removed']);

    }
}
